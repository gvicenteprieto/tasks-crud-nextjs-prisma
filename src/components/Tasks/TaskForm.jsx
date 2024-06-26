"use client";
const TaskForm = ({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
  params,
  handleDelete,
}) => {
  return (
    
    <form
      className="bg-slate-500 p-5 flex flex-col md:w-2/4 lg:w-1/4 text-black rounded-md mt-10 border border-white hover:border-blue-300"
      onSubmit={handleSubmit}
    >
      {/* <h1 className="text-2xl text-left  mb-5 font-bold">Task Form</h1> */}
      <label
        htmlFor="title"
        className="text-black pl-2 mt-2 mb-2"
      >
        Title:
      </label>
      <input
        type="text"
        id="title"
        placeholder="Task title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="text-sm border border-blue-800 bg-slate-700 p-3 mb-4 w-full rounded-md text-white"
      />

      <label
        htmlFor="description"
        className="text-black pl-2 mt-2 mb-2"
      >
        Description:
      </label>
      <textarea
        id="description"
        placeholder="Task description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        cols="30"
        rows="10"
        className="text-sm border border-blue-800 bg-slate-700 p-3 mb-4 w-full rounded-md text-white"
      ></textarea>
      <div className="flex justify-center items-center px-5">
        <button
          className="border border-blue-300 text-white bg-blue-800 hover:bg-blue-800 hover:text-text-blue-300 hover:border-white py-2 px-4 hover:font-bold rounded-md"
          type="submit"
        >
          {params.id == undefined ? "add task" : "edit task"}
        </button>
        {params.id && (
          <button
            className="ml-5 border border-red-500 text-white bg-red-700 hover:bg-red-800 hover:text-text-blue-300 hover:border-white py-2 px-4 font-bold rounded-md"
            type="button"

            onClick={handleDelete}
          >
            delete task
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
