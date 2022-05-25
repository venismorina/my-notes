import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectNoteById } from "./notesSlice";

import * as Yup from "yup";
import { FormikControl, Form } from "components/form";
import { useDispatch } from "react-redux";
import { noteValueChanged, noteDeleted } from "./notesSlice";
import { useCallback, useState } from "react";
import { useAutosave } from "react-autosave";
import { HomeIcon, PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import DarkModeButton from "components/DarkModeButton";

function SingleNote() {
  const { id } = useParams();

  let navigate = useNavigate();

  const note = useSelector((state) => selectNoteById(state, id));

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(noteDeleted(note.id));
    navigate(-1);
  };

  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);

  const saveTitle = useCallback((value) => {
    if (value.length > 1) {
      dispatch(noteValueChanged(id, "title", value));
    }
  }, []);

  const saveContent = useCallback((value) => {
    dispatch(noteValueChanged(id, "content", value));
  }, []);

  useAutosave({ data: title, onSave: saveTitle });
  useAutosave({ data: content, onSave: saveContent });

  if (!note) {
    return <p>404</p>;
  }

  return (
    <div className="h-full">
      <div className="flex flex-1 flex-col h-full">
        <div className="flex flex-col bg-white dark:bg-slate-800">
          <div className=" p-4 pb-0 justify-between items-center flex">
            <Link
              to="/"
              className="bg-blue-50 dark:bg-slate-900 px-4 py-2 mr-3 rounded-md flex items-center "
            >
              <HomeIcon className="h-5 w-5 mr-2 text-blue-500 dark:text-blue-400"></HomeIcon>
              <p className="font-bold text-blue-800 dark:text-blue-50">Home</p>
            </Link>
            <div className="flex flex-1 justify-end">
              <DarkModeButton></DarkModeButton>
              <button
                onClick={onDelete}
                className="bg-red-50 dark:bg-slate-900  px-4 py-2 rounded-md "
              >
                <TrashIcon className="h-5 w-5 text-red-600 dark:text-red-400"></TrashIcon>
              </button>
            </div>
            
          </div>
          <div className="flex items-center">
            <div className="p-8 pr-6  h-full items-center flex ">
              <PencilAltIcon className="text-orange-500 w-7 h-7 "></PencilAltIcon>
            </div>
            <input
              className="w-full p-8 pl-0 font-bold text-slate-700 dark:text-slate-50 bg-white dark:bg-slate-800  text-2xl focus:outline-none"
              placeholder="Title here"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <textarea
          className="bg-slate-100 dark:text-slate-50  dark:bg-slate-900  p-8 text-slate-800 h-full text-lg focus:outline-none"
          placeholder="Content..."
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {/* <button onClick={onDelete}>Delete</button> */}
    </div>
  );
}

export default SingleNote;
