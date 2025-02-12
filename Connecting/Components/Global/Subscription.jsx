import React from "react";

const Subscription = ({ activeUser }) => {
  return (
  <div className="flex flex-col w-full flex-1
  items-center justify-center"
  style={{
    position: "relative",
  }}
  >
    <div className="max-w-[800px]">
      <div className="my-4 mb-8 text-sm
      bg-indigo-800 relative border-1-4
      border-1-indigo-500 bg-opacity-1
      rounded-lg border border-indigo-900
      border-opacity-50 shadow-md py-2
      items-center w-full px-4">
        <p className="font-medium text-sm mt-1">
          {activeUser?.credit > 5
          ? `Welcome @${activeUser?.username}`
        : `@${activeUser?.username}: Your
        Credit left ${activeUser?.credit}`}
        </p>
        <p className="mt-2 text-sm">
          <span>{activeUser?.credit > 5 ? " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias a esse, necessitatibus similique est repudiandae animi soluta explicabo veniam deserunt quis cupiditate minus architecto expedita quod nemo sunt dolorum quo!"
          : "Lorem ipsum dolor sit amet consectetur adipisicing"}
          </span>
        </p>
        <a href="/account">
        <button className="mt-4 mb-2 text-sm
        px-4 py-2 bg-gradient-to-t
        from-indigo-600 rounded-md drop-shadow
        text-md shadow active:scale-95
        transition-all hover:broghtness-110">
          View plans
        </button>
        </a>
      </div>
    </div>
  </div>
  );
};

export default Subscription;
