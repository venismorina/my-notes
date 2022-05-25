import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteAdded, selectAllNotes } from "./notesSlice";
import { Link, useNavigate } from "react-router-dom";

import EllipsisText from "react-ellipsis-text";

import {
  DocumentIcon,
  PlusCircleIcon,
  PlusIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";
import { nanoid } from "@reduxjs/toolkit";
import DarkModeButton from "components/DarkModeButton";

const NotesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notes = useSelector(selectAllNotes);

  const renderNote = useCallback(
    (note) => (
      <Link to={`note/${note?.id}`}>
        <div
          className="p-6 w-full items-center flex bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-none  rounded-xl border dark:border-slate-700"
          key={note?.id}
        >
          <div className="mr-4 ml-2">
            <DocumentIcon className="h-7 w-7 text-blue-500 mr-1"></DocumentIcon>
          </div>
          <div>
            <h3 className="text-xl font-medium text-black dark:text-slate-100">{note?.title}</h3>

            <EllipsisText
              text={note?.content ?? "No content"}
              length={24}
              className="text-slate-500 mt-2"
            />
          </div>
        </div>
      </Link>
    ),
    []
  );

  const renderNotes = [].concat(notes).reverse().map(renderNote);

  const addNote = () => {
    var id = nanoid();
    dispatch(noteAdded(id));
    navigate(`note/${id}`);
  };

  return (
    <section>
      <div className=" bottom-1 border-b flex justify-between p-8 px-8 sm:px-12 dark:border-b-slate-700">
        <div className="flex items-center">
          <div className="flex items-center mr-4 rounded-lg justify-center aspect-square w-11 h-11 p-2 bg-green-500">
            <ViewGridAddIcon className="text-white "></ViewGridAddIcon>{" "}
          </div>
          <h2 className="text-3xl mr-12 font-black font-sans text-slate-800 dark:text-white">
            My notes
          </h2>
        </div>
        <div className="flex flex-1 justify-end">
          <DarkModeButton></DarkModeButton>
        <button
          onClick={addNote}
          className="flex bg-blue-600  rounded-md px-3 py-1 items-center"
        >
          <PlusCircleIcon className="h-5 w-5 text-white mr-1" />
          <p className="text-white font-bold">Add Note</p>
        </button>
        </div>
      </div>

      <div className="p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {renderNotes}
      </div>
    </section>
  );
};

export default NotesList;
