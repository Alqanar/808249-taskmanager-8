export const createFilterTemplate = (filter, count) =>
  `<input
    type="radio"
    id="${filter.id}"
    class="filter__input visually-hidden"
    name="filter"
    ${filter.checked ? `checked` : ``}
    ${count <= 0 ? `disabled` : ``}
    />
    <label for="${filter.id}" class="filter__label">
    ${filter.label} <span class="filter__all-count">${count}</span></label
  >`;
