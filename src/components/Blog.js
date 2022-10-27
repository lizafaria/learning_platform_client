import React from 'react';

const Blog = () => {
    return (
        <div>
        <div className="p-8 bg-purple-200 border rounded shadow-sm ">
          <h2 className='inline-block mb-3  text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400'><strong>Q1.</strong> What is Cors?</h2>
     
        <p className="mb-5 text-gray-700"><strong>Ans:</strong>
        Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP).
        </p>
      </div>
      
      <div className="p-8 bg-purple-200 border rounded shadow-sm ">
          <h2 className='inline-block mb-3  text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400'><strong>Q2.</strong> Why are you using firebase? What other options do you have to implement authentication?</h2>
     
        <p className="mb-5 text-gray-700"><strong>Ans:</strong></p>
        Firebase is a much less technical and time-saving opportunity to writing full-fledged backend code for
dynamic apps
As a Google Cloud service, it additionally offers us get entry to to different Google merchandise and features, like Google
Drive and Sheets. For instance, we will import dummy records from Google Sheets and use it
quickly to serve our app. With Firebase, it is quite easy to attach and use integrated third-party
authentication providers, such as Google, Facebook, Twitter, amongst others. And if we need to use
a pre-constructed authentication UI, we've got it at our disposal as well.
      </div>
      <div className="p-8 bg-purple-200 border rounded shadow-sm ">
          <h2 className='inline-block mb-3  text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400'><strong>Q3.</strong> How does the private route work?</h2>
     
        <p className="mb-5 text-gray-700"><strong>Ans:</strong>
        The personal course factor is just like the general public course, the simplest alternate is that redirect URL 
 and authenticate condition. The react personal course factor renders toddler components ( youngsters 
 ) if the person is logged in. If now no longer logged withinside the person is redirected to the /login web page with the go back url 
 surpassed withinside the area country property.
        </p>
      </div>
      <div className="p-8 bg-purple-200 border rounded shadow-sm ">
          <h2 className='inline-block mb-3  text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400'><strong>Q4.</strong> What is node?how does node work?</h2>
     
        <p className="mb-5 text-gray-700"><strong>Ans:</strong>
        A node is a factor of intersection inside a facts conversation network. In an surroundings where
all gadgets are reachable via the network, those gadgets are all taken into consideration nodes. In networking
a node is both a connection factor, a redistribution factor, or a conversation endpoint. In
pc science, nodes are gadgets or facts factors on a huge network, gadgets one of these PC, phone, or
printer are considers nodes.
        </p>
      </div>
     </div>
    );
};

export default Blog;