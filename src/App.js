import './App.css';
import BlogCard from "./BlogCard";
function App() {
  const cardContents = [

    {
      id: 1,
      title: "Blog title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat enim non sem vulputate porttitor. Integer eu mauris felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel blandit nisl. Etiam auctor, metus ac eleifend facilisis, mi eros eleifend nunc, nec ultricies felis arcu eget lorem. Sed malesuada ipsum nisi, quis pulvinar odio rhoncus quis. Nunc tellus ex, facilisis ut ex quis, consequat tincidunt erat. Sed nec molestie est. Aliquam aliquam mauris vehicula magna tempor, sit amet tempor nibh malesuada. Suspendisse velit arcu, pellentesque et magna quis, ultrices egestas eros. Donec suscipit, velit quis ultricies pretium, erat velit venenatis metus, sed mattis leo ex sit amet ipsum. Integer porttitor sed arcu eget mollis."
    },
    {
      id: 2,
      title: "Blog title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat enim non sem vulputate porttitor. Integer eu mauris felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel blandit nisl. Etiam auctor, metus ac eleifend facilisis, mi eros eleifend nunc, nec ultricies felis arcu eget lorem. Sed malesuada ipsum nisi, quis pulvinar odio rhoncus quis. Nunc tellus ex, facilisis ut ex quis, consequat tincidunt erat. Sed nec molestie est. Aliquam aliquam mauris vehicula magna tempor, sit amet tempor nibh malesuada. Suspendisse velit arcu, pellentesque et magna quis, ultrices egestas eros. Donec suscipit, velit quis ultricies pretium, erat velit venenatis metus, sed mattis leo ex sit amet ipsum. Integer porttitor sed arcu eget mollis."
    },
    {
      id: 3,
      title: "Blog title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat enim non sem vulputate porttitor. Integer eu mauris felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi vel blandit nisl. Etiam auctor, metus ac eleifend facilisis, mi eros eleifend nunc, nec ultricies felis arcu eget lorem. Sed malesuada ipsum nisi, quis pulvinar odio rhoncus quis. Nunc tellus ex, facilisis ut ex quis, consequat tincidunt erat. Sed nec molestie est. Aliquam aliquam mauris vehicula magna tempor, sit amet tempor nibh malesuada. Suspendisse velit arcu, pellentesque et magna quis, ultrices egestas eros. Donec suscipit, velit quis ultricies pretium, erat velit venenatis metus, sed mattis leo ex sit amet ipsum. Integer porttitor sed arcu eget mollis."
    }
  ]

  
  return (
    <div className="App">
      
    {
      cardContents.map((item, i) => {
        return (
        <BlogCard 
          id={item.id} 
          title={item.title}
          description={item.description}
          />
          );
        }
      )
    }
    </div>
  );
}

export default App;
