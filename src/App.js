import "./App.css";
import { Quotes } from "./quotes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App()  {
  const client = new QueryClient();
  return (
    <div className="App">
      <div className="banner">Quote Generator</div>
      
      <QueryClientProvider client={client}>
      
          <Quotes />
        
      </QueryClientProvider>
      <div className="footer">
      {/* <a href="https://google.com/" >github</a>
      <a href="https://google.com/" >linkedin</a>
      <a href="https://google.com/" >mail</a>
      <a href="https://google.com/" >resume</a> */}
      Created by - ankitsuman07@gmail.com
      </div>
    </div>
  );
}

export default App;