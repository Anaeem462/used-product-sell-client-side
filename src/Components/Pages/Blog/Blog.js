import React from "react";

const Blog = () => {
    return (
        <div className=' grid gap-7 border border-yellow-500 my-20'>
            <div className='border border-red-600'>
                <div className=' border border-green-600 p-5 m-2'>
                    <h1 className='text-4xl font-semibold font-sans'>What are the different wayse to manage a state in a React Application?</h1>
                    <p className='text-xl my-4'>
                        => 4 ways to manage a state in React Application . Thats are 1.Local state 2.Global State 3.Server state 4.Url state . local
                        state is most use in react with useState and for global state is mostl use in react with useEffect or dynamic hooks .
                    </p>
                </div>
                <div className=' border border-green-600 p-5 m-2'>
                    <h1 className='text-4xl font-semibold font-sans'>How does prototypical inheritance work?</h1>
                    <p className='text-xl my-4'>
                        => Parents is the list of classes you’re extending. Classes may only extend other classes; Variables is the number of variable
                        slots that instances will have. For example, a “class Point2d(int x, int y)has 2 instance variables; Methods is a table of
                        “name → function” that describes which services each instance of the class will support;{" "}
                    </p>
                </div>
                <div className=' border border-green-600 p-5 m-2'>
                    <h1 className='text-4xl font-semibold font-sans'>What is a unit test?Why should we write unit tests?</h1>
                    <p className='text-xl my-4'>
                        => Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to
                        validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase)
                        of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an
                        individual function, method, procedure, module, or object.
                    </p>
                </div>
                <div className=' border border-green-600 p-5 m-2'>
                    <h1 className='text-4xl font-semibold font-sans'>React vs Angular vs Vue?</h1>
                    <p className='text-xl my-4'>
                        => React often requires extra modules and components, which keeps the core library small, but means there’s extra work
                        involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require
                        extras like React often does, though it does have a steeper learning curve for its core compared to React.Vue is generally
                        more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to
                        integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
