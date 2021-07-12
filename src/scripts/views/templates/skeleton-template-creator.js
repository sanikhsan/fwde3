const Skeleton = (count) => {
  let template = "";

  for (let i = 0; i < count; i += 1) {
    template += `
        <div class="skeleton">
          <div class="skeleton__thumbnail"></div>
          <div class="skeleton__content">
              <div class="skeleton__title"></div>
              <div class="skeleton__description"></div>
              <div class="skeleton__description"></div>
              <div class="skeleton__description"></div>
              <div class="skeleton__description"></div>
              <div class="skeleton__description"></div>
              <div class="skeleton__description"></div>
          </div>
        </div>
    `;
  }
  return template;
};

export default Skeleton;
