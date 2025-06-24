import React, { useEffect, useState } from 'react';

const TreeVisualizer = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const item = data;

    function tree(item) {
      if (item?.type)setItems(prev => [...prev, item.type]);

      if (item?.children?.length === 1) {
        console.log(item.children[0]);
        if (typeof item.children[0] === 'string') {
          setItems(prev => [...prev, item.children[0]]);
        } else if (typeof item.children[0] === 'object') {
          tree(item.children[0]);
        }
      }

      if (item?.children?.length > 1) {
        item.children.forEach(thing => {
          if (typeof thing === 'object') {
            tree(thing);
          } else if (typeof thing === 'string') {
            setItems(prev => [...prev, thing]);
          }
        });
      }
    }

    tree(item);
  }, [data]);

  useEffect(() => {
    console.log(items); 
  }, [items]);

  return (
    <div>
      {items.map((val, idx) => (
        <p key={idx}>{val}</p>
      ))}
    </div>
  );
};

export default TreeVisualizer;
