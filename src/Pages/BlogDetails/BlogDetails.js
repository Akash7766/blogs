import React from "react";
import CommentSectioin from "./CommentSectioin";

const BlogDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="py-14">
        <div>
          <div>
            <h2 className="text-5xl font-bold mb-3">
              Get your own website in a minutes.
            </h2>
            <div className="flex py-3">
              <div class="avatar  mr-5">
                <div class="w-14 ring rounded mb-5">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div>
                <h5 className="text-xl font-bold">Writer : Akash Rahman</h5>
                <h5 className="text-xl italic">Email : akash@gmail.com</h5>
              </div>
            </div>
            <img
              className="w-full my-5"
              src="https://img.lovepik.com//photo/50035/0659.jpg_300.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-xl leading-8 mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
              perferendis et doloribus unde architecto optio laboriosam porro
              adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore perferendis, enim praesentium omnis, iste
              doloremque quia officia optio deserunt molestiae voluptates soluta
              architecto tempora. Molestiae cupiditate inventore animi, maxime
              sapiente optio, illo est nemo veritatis repellat sunt doloribus
              nesciunt! Minima laborum magni reiciendis qui voluptate quisquam
              voluptatem soluta illo eum ullam incidunt rem assumenda eveniet
              eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa,
              odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
            </p>
          </div>
        </div>
      </div>
      <CommentSectioin></CommentSectioin>
    </div>
  );
};

export default BlogDetails;
