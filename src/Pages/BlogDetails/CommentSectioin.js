import React from "react";

const CommentSectioin = () => {
  return (
    <div className="container mx-auto py-10">
      <div>
        <h2 className="text-4xl font-bold">Leave a comment</h2>
        <div className="my-5 ">
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              class="input input-bordered input-accent w-full max-w-lg"
            />
            <input
              type="text"
              placeholder="Your email"
              class="input input-bordered input-accent w-full max-w-lg"
            />
            <textarea
              class="input input-bordered input-accent w-full max-w-lg h-28"
              placeholder="Your message..."
            ></textarea>
            <div>
              <input
                type="submit"
                value="Submit"
                class="btn btn-success inline"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="text-4xl font-bold mb-10">6 Comments</h2>
        <div className="mb-8">
          <div className="flex py-3">
            <div class="avatar  mr-5">
              <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {" "}
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div>
              <div>
                <h5 className="text-xl font-bold"> Akash Rahman</h5>
                <h5 className="text-xl italic"> akash@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates voluptate quas excepturi dolor tenetur hic velit maxime
              necessitatibus deleniti, non tempora voluptatum tempore adipisci
              quis, labore quibusdam ea eius eveniet?
            </p>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex py-3">
            <div class="avatar  mr-5">
              <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {" "}
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div>
              <div>
                <h5 className="text-xl font-bold"> Akash Rahman</h5>
                <h5 className="text-xl italic"> akash@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="lg:w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates voluptate quas excepturi dolor tenetur hic velit maxime
              necessitatibus deleniti, non tempora voluptatum tempore adipisci
              quis, labore quibusdam ea eius eveniet?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSectioin;
