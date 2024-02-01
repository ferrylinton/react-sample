import BlogIcon from "../icons/BlogIcon";

export default function Blog() {
  return (
    <div className='w-full max-w-3xl flex flex-col items-center'>
      <BlogIcon className="element-bg" />
      <div className="z-10 flex flex-col gap-2 text-center ">
        <div className="text-xl font-bold">Checkout My Blog at</div>
        <a className="text-3xl font-bold underline underline-offset-2 mb-4 text-green-600 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]" href="www.marmeam.com">
          www.marmeam.com
        </a>
        <div className="posts">
          <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud" target="_blank">
            Simple Example of REST CRUD With Express JS And Mongodb
          </a>
          <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud-ts" target="_blank">
            Simple Example of REST CRUD With Express JS And Mongodb (Typescript)
          </a>
          <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud-jest-ts" target="_blank">
            Simple Example of JEST With REST CRUD Express JS (Typescript)
          </a>
          <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud-jest" target="_blank">
            Simple Example of JEST With REST CRUD Express JS
          </a>
          <a href="https://www.marmeam.com/en/post/react-tailwind-crud-1" target="_blank">
            Create CRUD Application With React, Tailwind And Axios
          </a>
        </div>
      </div>
    </div>
  )
}