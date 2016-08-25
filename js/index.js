var React = require('react');
var ReactDOM = require('react-dom');

var Link = function(props) {
    return (
        <li>
            <a href={props.url}>{props.title}</a>
        </li>
    );
};

var Category = function(props) {
    var myLinks = [];
    for (var i=0; i<props.links.length; i++) {
        myLinks.push(<Link key={i} title={props.links[i].title} url={props.links[i].url}/>);
    }
    return (
        <div className="category">
          <div className="category-title">{props.title}</div>
          <ul>{myLinks}</ul>
        </div>
    );
};

var Board = function(props) {
    var myCategories = [];
    for (var i=0; i<props.categories.length; i++) {
        myCategories.push(<Category key={i} title={props.categories[i].categoryTitle} links={props.categories[i].categoryLinks} />);
    }
    return (
        <div className="board">
          <div className="board-title">{props.title}</div>
          {myCategories}
        </div>
    );
};

//<option value=indexOf.whatever>{props.category[i].title}</option>

// var CategoryControl = function(){
//   return(<div id="category-control">
//           <h2>Add Category</h2>
//           <form>
//             <label for="category-title">Category Title</label>
//             <input name="category-title" type="text"></input>
//             <button>Whatever</button>
//           </form>
//           <ul class="category-list">
//           </ul>
//         </div>);
//
// };
//
// var LinkControl = function(props) {
//     var myOptions = []
//     for (var i=0; i<props.categories.length; i++) {
//         var counter = i;
//         myCategories.push(<option value={counter}>{props.categories[i].categoryTitle}</option>);
//     }
//   return(<div id="link-control">
//           <h2>Add Link</h2>
//           <form>
//             <label for="link-title">Link Title</label>
//             <input name="link-title" type="text"></input> <br />
//             <label for="link-url">Link URL</label>
//             <input name="link-url" type="text"></input><br />
//             <label for="link-category">Link Category</label>
//             <select id="link-category">
//               <option>Select a category...</option>
//               {myOptions}
//             </select><br />
//             <button>Dunno</button>
//           </form>
//         </div>
//
//
//   );
// };

var WholeSite = function() {
  let categoryContent = [
      {
          categoryTitle: 'Search Engines',
          categoryLinks: [
            {url: 'http://www.google.com', title: 'Google'},
            {url: 'http://www.bing.com', title: 'Bing'},
            {url: 'http://www.yahoo.com', title: 'Yahoo'}
          ]
      },
      {
          categoryTitle: 'Coding',
          categoryLinks: [
            {url: 'http://www.thinkful.com', title: 'Thinkful'},
            {url: 'http://www.javascriptissexy.com', title: 'JS is Sexy'},
            {url: 'http://www.codewars.com', title: 'Codewars'}
          ]
      },
      {
          categoryTitle: 'Research',
          categoryLinks: [
            {url: 'http://www.wikipedia.com', title: 'Wikipedia'},
            {url: 'http://www.quora.com', title: 'Quora'},
            {url: 'http://www.stackoverflow.com', title: 'Stack Overflow'}
          ]
      }
  ];

    return(
        // <div>
        //   <div id="control-panel">
        //       <CategoryControl />
        //       <LinkControl categories={categoryContent} />
        //   </div>
            <Board title="My Linkboard" categories={categoryContent} />
        // </div>
    );
};

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<WholeSite />, document.getElementById('app'));
});
