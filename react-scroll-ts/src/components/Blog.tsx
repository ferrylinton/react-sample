
export default function Blog() {
  return (
    <div className="flex flex-col gap-2 text-center ">
      <div className="text-xl font-bold">Checkout My Blog at</div>
      <a
        className="text-3xl font-bold underline underline-offset-2 mb-4"
        href="www.marmeam.com">
        www.marmeam.com
      </a>
      <div className="posts">
        <a
          href="https://www.marmeam.com/en/post/express-rest-mongodb-crud"
          target="_blank" 
          rel="noreferrer">
          Simple Example of REST CRUD With Express JS And Mongodb
        </a>
        <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud-ts">
          Simple Example of REST CRUD With Express JS And Mongodb (Typescript)
        </a>
        <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud-jest-ts">
          Simple Example of JEST With REST CRUD Express JS (Typescript)
        </a>
        <a href="https://www.marmeam.com/en/post/express-rest-mongodb-crud-jest">
          Simple Example of JEST With REST CRUD Express JS
        </a>
        <a href="https://www.marmeam.com/en/post/react-tailwind-crud-1">
          Create CRUD Application With React, Tailwind And Axios
        </a>
      </div>
    </div>
  )
}