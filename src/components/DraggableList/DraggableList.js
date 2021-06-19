import React, { useRef } from "react";
import clamp from "ramda/src/clamp";
import move from "ramda/src/move";
import { useDrag } from "react-use-gesture";
import { useSprings, animated, interpolate } from "react-spring";

import "./DraggableList.css";

const itemHeight = 70;

// Returns style for the item based on its draggin state
const fn = (order, down, originalIndex, curIndex, y) => (index) =>
  // Is item being dragged? If so, bring it top and make it little bigger
  down && index === originalIndex
    ? {
        y: curIndex * itemHeight + y,
        scale: 1.1,
        zIndex: "1",
        shadow: 15,
        immediate: (n) => n === "y" || n === "zIndex",
      }
    : {
        y: order.indexOf(index) * itemHeight,
        scale: 1,
        zIndex: "0",
        shadow: 1,
        immediate: false,
      };

const items = [
  "Lie Union",
  "Replied Principal",
  "Fair Exercise",
  "Nine Jar",
  "Fence Key",
];

export default function DraggableList() {
  // This will keep the order of the items
  // Ref is used so it doesn't trigger rerendering
  const order = useRef(items.map((_, index) => index));
  // Spings will handle all the animations
  const [springs, setSprings] = useSprings(items.length, fn(order.current));

  // This function is periodically called while element is dragged
  // Calculating new order of the items
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      0,
      items.length - 1,
      Math.round((curIndex * itemHeight + y) / itemHeight)
    );
    const newOrder = move(curIndex, curRow, order.current);
    setSprings(fn(newOrder, active, originalIndex, curIndex, y));
    if (!active) order.current = newOrder;
  });

  return (
    <div className="drag-list-container">
      <ul>
        {springs.map(({ zIndex, shadow, y, scale }, i) => (
          <animated.li
            {...bind(i)}
            key={i}
            style={{
              zIndex,
              boxShadow: shadow.interpolate(
                (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
              ),
              transform: interpolate(
                [y, scale],
                (y, s) => `translate3d(0,${y}px,0) scale(${s})`
              ),
            }}
          >
            {items[i]}
          </animated.li>
        ))}
      </ul>
    </div>
  );
}
