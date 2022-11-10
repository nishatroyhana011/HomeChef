import React from 'react';
import useTitle from '../../../useTitle/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className=''>
            <div className='flex h-32 bg-slate-100 justify-around items-center'>
                <p className='text-2xl text-purple-800 font-semibold'>Blog Section</p>
            </div>
            <div className='container px-8 mx-auto my-8'>
                <div className='flex flex-col md:flex-row my-5'>
                    <img className='w-full md:w-1/2' src='https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png'></img>
                    <div className='w-full md:w-2/3 my-4 md:my-0 text-left md:mx-5'>
                        <p className='text lg font-semibold'>Difference between SQL and NoSQL?</p>
                        <p>SQL databases are relational, NoSQL databases are non-relational.
SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row my-5'>
                    <img className='w-full md:w-1/2' src='https://miro.medium.com/max/1400/1*YguJreMramdggBXl0QNIqw.png'></img>
                    <div className='w-full md:w-2/3 my-4 md:my-0 text-left md:mx-5'>
                        <p className='text lg font-semibold'>What is JWT, and how does it work?</p>
                        <p>The JWT is divided into three parts- Header, Payload, and Signature. Each piece is separated from the other using a dot(.)</p>
                        <p>The header is the part that identifies which algorithm is being used to generate the signature. It usually consists of two parts, the type of the token, which is JWT, and the hashing algorithm, like HMAC-SHA256.</p>
                        <p>The payload is the part that contains a set of claims. Claims are used to transmit information between two parties. There are no mandatory claims, but JWT specification defines a set of standard claims, such as iat and sub, which are short for issues at and subject. Custom Claims are also included in the payload if required.</p>
                        <p>The signature is the part that securely validates the token. The encoded header(Base64url) is concatenated with the encoded payload(Base64url) and then signed by hashed with the algorithm already mentioned in the header with the secret-key only known to the issuer. Then this whole string is again encoded with Base64url to obtain the final signature.</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row my-5'>
                    <img className='w-full md:w-1/2' src='https://www.tutorialrepublic.com/lib/images/javascript-illustration.png'></img>
                    <div className='w-full md:w-2/3 my-4 md:my-0 text-left md:mx-5'>
                        <p className='text lg font-semibold'>What is the difference between javascript and NodeJS?</p>
                        <p>JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all.</p>
                          </div>
                </div>

                <div className='flex flex-col md:flex-row my-5'>
                    <img className='w-full md:w-1/2' src='https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'></img>
                    <div className='w-full md:w-2/3 my-4 md:my-0 text-left md:mx-5'>
                        <p className='text lg font-semibold'>o	How does NodeJS handle multiple requests at the same time?</p>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                        <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;