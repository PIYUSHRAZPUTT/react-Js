import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const { data: posts, loading: postsLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const { data: products, loading: productsLoading } = useFetch(
    "https://fakestoreapi.com/products",
  );

  return (
    <div>
      <div
        style={{
          padding: "10px",
          margin: "10px",
          border: "4px solid #fff",
        }}
      >
        <h1>Posts</h1>

        {postsLoading && <p>Loading...</p>}
        {posts &&
          posts.slice(0,5).map((post) => <div key={post.id}><h3>{post.title}</h3></div>)}
      </div>
      <div
        style={{
          padding: "10px",
          margin: "10px",
          border: "4px solid #fff",
        }}
      >
        <h1>Products</h1>

        {productsLoading && <p>Loading...</p>}
        {products &&
          products.slice(0, 8).map((product) => <div key={product.id}><h3>{product.title}</h3></div>)}
      </div>
    </div>
  );
};

export default App;
