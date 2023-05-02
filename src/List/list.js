import { useState } from "react";
import {Npmvalue} from "./Atom"
import { useRecoilState } from "recoil"
import { Link } from "react-router-dom";
import styles from "./list.module.css"
export default function List() {
    
    const [Value, setselectedvalue] = useRecoilState(Npmvalue);

    function handleDelete(id) {
        let result = Value.filter((item, index) => id !== index);
        setselectedvalue(result);
      }
return(

    <div className={styles.Main}>
            <h1>Add fav values</h1>
            
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr style={{ backgroundColor: "lightgray" }}>
                <th style={{ padding: "8px", border: "1px solid black" }}>Name</th>
                <th style={{ padding: "8px", border: "1px solid black" }}>
                    Description
                </th>
                <th style={{ padding: "8px", border: "1px solid black" }}>
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                {Value &&
                Value.map((d, index) => (
                    <tr key={index} style={{ backgroundColor: "white" }}>
                    <td style={{ padding: "8px", border: "1px solid black" }}>
                        {d.name}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid black" }}>
                        {d.des}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid black" }}>
                        <button
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            padding: "8px",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                        onClick={() => handleDelete(index)}
                        >
                        Delete
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
            <Link to ="/"><button className={styles.button}> Back to Npm Packages</button></Link>
            </div>
    )
 }
