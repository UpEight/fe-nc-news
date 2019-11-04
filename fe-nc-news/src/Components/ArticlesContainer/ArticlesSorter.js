import React from 'react';

const ArticlesSorter = ({ updateSortBy, updateSortOrder }) => {
  return (
    <section className="articles-sorter">
      <label>
        Sort by
        <select
          onChange={updateSortBy}
          className="sort-options"
          name="sort-options"
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        <i className="sort-label fa fa-caret-up"></i>
        <input
          type="radio"
          id="sort-asc"
          name="sort-order"
          value="asc"
          onChange={updateSortOrder}
          className="sort-label hide"
          alt="Sort ascending"
        ></input>
      </label>
      <label>
        <i className="sort-label sort-desc fa fa-caret-down"></i>
        <input
          type="radio"
          id="sort-desc"
          name="sort-order"
          value="desc"
          defaultChecked
          onChange={updateSortOrder}
          alt="Sort descending"
        ></input>
      </label>
    </section>
  );
};

export default ArticlesSorter;
