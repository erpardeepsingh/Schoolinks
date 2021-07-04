import React, { useState } from "react";
import ProfileLink from "../components/profileLink";
import Dropdown from "../components/Dropdown";
import Loader from "../components/Loader";
import debounce from "../utils/debounce";

let cached_results = [];
let title = "",
  page_c;

export default function Index() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let callApi = debounce((e, page) => {
    title = e;

    const if_already_contains = cached_results.filter((ele) => ele.title === e);
    if (if_already_contains.length > 0 && page === page_c) {
      setResult(if_already_contains[if_already_contains.length - 1].result);
    } else {
      if (if_already_contains.length === 0) setResult({});
      page_c = page;
      setLoading(true);
      setError(false);
      fetch(`https://api.github.com/search/users?q="${e}"&page=${page}`)
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          if (res.Error) setError(true);
          else {
            if (if_already_contains.length > 0) {
              let new_result = {
                ...if_already_contains[if_already_contains.length - 1].result,
                items: if_already_contains[
                  if_already_contains.length - 1
                ].result.items.concat(res.items),
              };
              setResult(new_result);
              cached_results.push({
                title: e,
                result: new_result,
              });
            } else {
              cached_results.push({
                title: e,
                result: res,
              });
              setResult(res);
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    }
  }, 500);

  return (
    <div className="root-div">
      <Dropdown
        position="-110px"
        color="transparent"
        top={"60px"}
        left="0px"
        width="378px"
        height={!loading && cached_results.length === 0 ? "0px" : "386px"}
        boxShadow="0 8px 20px 0 rgba(0, 0, 0, 0.08)"
        border="solid 1px rgba(34, 33, 51, 0.04)"
        backgroundColor="#ffffff"
        menuChildren={
          <>
            {result.total_count > 0 && result.items && (
              <div className="scrollbar">
                {result.items.map((user) => (
                  <ProfileLink data={user} />
                ))}
                {result.items.length < result.total_count && (
                  <div
                    onClick={(e) => {
                      callApi(title, page_c + 1);
                    }}
                    className="center link-github"
                  >
                    Next
                  </div>
                )}
              </div>
            )}
            {loading && <Loader />}
            {error && <div className="center">Sorry Some Error Occurred</div>}
            {!loading && title.length > 0 && result.total_count === 0 && (
              <div className="center ">Sorry No Results</div>
            )}
          </>
        }
      >
        <input
          type="text"
          placeholder="Search.."
          id="myInput"
          onChange={(e) => {
            callApi(e.target.value, 1);
          }}
        />
      </Dropdown>
    </div>
  );
}
