ej.base.enableRipple(true);
/**
 * Accordion Default Sample
 */

//Initialize Accordion component
var item = { header: 'Title', expanded: true, content: '#__panel' };
var args = { expandMode: 'Single', items: [item] };
var accordion = new ej.navigations.Accordion(args);
//Render initialized Accordion component
accordion.appendTo('#Accordion_default');


setTimeout(function () {

  var node = document.createElement("SPAN");         // Create a <li> node
  var textnode = document.createTextNode("Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.");   // Create a text node
  node.appendChild(textnode);                        // Append the text to <li>
  document.getElementById("__panel").appendChild(node);

}, 2);

setTimeout(function () {
  var exp = document.getElementById('Accordion_default');
  var expObj = exp.ej2_instances;
  if (expObj && expObj[0] && expObj[0].items && expObj[0].items[0]) {
    var items = expObj[0].items[0].items;
    //expObj[0].items[0].header = "Hallo";  // IF I DECOMMENT THIS MY ACCORDION DOESN'T SHOW MY CONTENT!                            
  }


}, 200)


