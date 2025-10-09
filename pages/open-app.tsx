import { useState } from "react";

export default function OpenApp() {
  const [id, setId] = useState("24");

  return (
    <div>
      <div>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID SOP EOP"
        />
      </div>
      <a style={{ color: "white" }} href={`edgesop://acknowledge/${id}`}>
        Open EdgeSop id: {id}
      </a>
    </div>
  );
}
