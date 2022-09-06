https://overcoder.net/q/1088900/reactjs-как-реализовать-кнопку-показать-больше

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    }
  }
  handleClick() {
    this.setState({ showMore: true })
  }
  render() {
    const list = [
      'list 1',
      'list 2',
      'item 3',
      'item 4',
      'item 5',
      'item 6',
      'item 7',
      'item 8',
      'item 9',
      'item 10',
      'item 11',
      'item 12',
      'item 12',
      'item 14',
      'item 15',
      'item 16',
      'item 17',
      'item 18',
    ]

    const numberOfItems = this.state.showMore ? list.length : 10
    return (
      <div>
        {list.slice(0, numberOfItems).map((item) => {
          return (
            <div>{item}</div>
          )
        })}
        <button onClick={() => this.handleClick()}>Show more</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

import { useState, useEffect } from "react";
// Usage
function App() {
  const size = useWindowSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }/*  */

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
