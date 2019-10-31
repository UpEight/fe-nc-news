import React from 'react';

const ArticlesSorter = ({ updateSortBy, updateSortOrder }) => {
  return (
    <section className="articles-sorter">
      <label>
        Sort:
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
        Ascending
        <input
          type="radio"
          id="sort-asc"
          name="sort-order"
          value="asc"
          onChange={updateSortOrder}
        ></input>
      </label>
      <label>
        Descending
        <input
          type="radio"
          id="sort-desc"
          name="sort-order"
          value="desc"
          defaultChecked
          onChange={updateSortOrder}
        ></input>
      </label>
    </section>
  );
};

export default ArticlesSorter;
