import React from "react";
import "./index.css";

export default function index({ data }) {
  return (
    <a className='link-github'>
      <div
        className="avatar"
        style={{ backgroundImage: `url(${data.avatar_url})` }}
      />
      <span>{data.login}</span>
    </a>
  );
}
