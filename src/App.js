import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';


function App() {
  let values = [
    {
      subs : "free",
      price : 0,
      user : "Single User",
      storage : "5GB Storage",
      publicProjects : "Unlimited Public Projects",
      access : "Community Access",
      privateProjects : false,
      support : false,
      domain : false,
      report : false
    },
    {
      subs : "plus",
      price : 9,
      user : "5 users",
      storage : "50GB Storage",
      publicProjects : "Unlimited Public Projects",
      access : "Community Access",
      privateProjects : true,
      support : true,
      domain : true,
      report : false
    },
    {
      subs : "pro",
      price : 49,
      user : "Unlimited User",
      storage : "150GB Storage",
      publicProjects : "Unlimited Public Projects",
      access : "Community Access",
      privateProjects : true,
      support : true,
      domain : true,
      report : true
    },
  ]
  return (
    <div className="container body-design">
        <div className="container mt-5">
            <div className="row">
               {
                 values.map((value) => {
                      return <Card contentType={value}></Card>  
                 })
               }
               
            </div>
        </div>
    </div>
    
  );
}

export default App;
