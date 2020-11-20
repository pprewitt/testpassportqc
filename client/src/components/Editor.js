import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactAce from 'react-ace';
// import {split as SplitEditor} from 'react-ace';
import brace from 'brace';
// import "./modal.css";
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/monokai';
import $ from "jquery";


export default function Editor() {


    const [Language1, setLanguage1] = useState("html");
    const [Language2, setLanguage2] = useState("html");
    const [Language3, setLanguage3] = useState("html");
    const [showResults2, setShowResults2] = useState(false);
    const [showResults3, setShowResults3] = useState(false);

    function languageSelect1() {
        setLanguage1($("#languageSelect1").val());
      }
    function languageSelect2() {
        setLanguage2($("#languageSelect2").val());
    }
    function languageSelect3() {
        setLanguage3($("#languageSelect3").val());
    }
    function addEditor2() {
        setShowResults2(true)
    }
    function addEditor3() {
        setShowResults3(true)
    }

    return (
        <div>
            <button className="mb-2 mr-2" onClick={addEditor2}>Add A Second Editor</button>
            <button className="mb-2" onClick={addEditor3}>Add A Third Editor</button>
            <div className="d-flex row append">
                <div className="editor mr-1">
                    <ReactAce mode={Language1} theme="monokai" setReadOnly={false} />
                    <label for="formGroupExampleSearch">Language</label>
                    <select class="form-control" id="languageSelect1" onChange={languageSelect1}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="handlebars">Handlebars</option>
                    <option value="javascript">JavaScript</option>
                    <option value="markdown">Markdown</option>
                    <option value="sql">SQL</option>
                    </select>
                </div>
                <div>
                    { showResults2 ? 
                    <div className="editor mr-1">
                    <ReactAce mode={Language2} theme="monokai" setReadOnly={false} />
                    <label for="formGroupExampleSearch">Language</label>
                    <select class="form-control" id="languageSelect2" onChange={languageSelect2}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="handlebars">Handlebars</option>
                    <option value="javascript">JavaScript</option>
                    <option value="markdown">Markdown</option>
                    <option value="sql">SQL</option>
                    </select>
                    </div> : null }
                </div>
                <div>
                    { showResults3 ? 
                    <div className="editor mr-1">
                    <ReactAce mode={Language3} theme="monokai" setReadOnly={false} />
                    <label for="formGroupExampleSearch">Language</label>
                    <select class="form-control" id="languageSelect3" onChange={languageSelect3}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="handlebars">Handlebars</option>
                    <option value="javascript">JavaScript</option>
                    <option value="markdown">Markdown</option>
                    <option value="sql">SQL</option>
                    </select>
                    </div> : null }
                </div>
            </div>
        </div>
    )
}