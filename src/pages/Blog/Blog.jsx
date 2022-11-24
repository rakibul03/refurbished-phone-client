import React from "react";

const Blog = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="mt-4 text-gray-400">
              There are four main types of state you need to properly manage in
              your React apps: Local state, Global state, Server state, URL
              state.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              How does prototypical inheritance work?
            </h2>
            <p className="mt-4 text-gray-400">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p className="mt-4 text-gray-400">
              Unit Testing is a type of software testing where individual units
              or components of a software are tested.
            </p>
            <p className="mt-4 text-gray-400">
              <span>Why should we write unit tests?</span> <br />
              They enable you to catch bugs early in the development process.
              Automated unit tests help a great deal with regression testing.
              They detect code smells in your codebase. For example, if you're
              having a hard time writing unit tests for a piece of code, it
              might be a sign that your function is too complex.
            </p>
          </article>
        </div>
      </div>
      <h1 className="text-center mt-16 text-2xl font-semibold tracking-wider">
        React vs. Angular vs. Vue
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
          <article>
            <h2 className="text-xl font-bold">React</h2>
            <p className="mt-4 text-gray-400">
              React is based on JavaScript, but it's mostly combined with JSX
              JavaScript XML, a syntax extension that allows you to create
              elements that contain HTML and JavaScript at the same time.
              Anything you create with JSX could also be created with the React
              JavaScript API, but most developers prefer JSX because it's more
              intuitive.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
          <article>
            <h2 className="text-xl font-bold">Vue</h2>
            <p className="mt-4 text-gray-400">
              The Vue.js core library focuses on the View layer only. It's
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. Although Vue
              is not strictly associated with the MVVM Model-View-ViewModel
              pattern, its design was partly inspired by it. With Vue, you'll be
              working mostly on the ViewModel layer, to make sure that the
              application data is processed in a way that allows the framework
              to render an up-to-date View.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100">
          <article>
            <h2 className="text-xl font-bold">Angular</h2>
            <p className="mt-4 text-gray-400">
              AngularJS, the original framework, is an MVC Model-View-Controller
              framework. But in Angular 2, there's no strict association with
              MV*-patterns as it is also component-based. Projects in Angular
              are structured into Modules, Components, and Services. Each
              Angular application has at least one root component and one root
              module. Each component in Angular contains a Template, a Class
              that defines the application logic, and MetaData Decorators. The
              metadata for a component tells Angular where to find the building
              blocks that it needs to create and present its view.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Blog;
