import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Preview = () => {
  const { projectId } = useParams();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <div>Preview</div>
  )
}

export default Preview