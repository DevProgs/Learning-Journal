const viewMoreBtn = document.querySelector('.blog__button');
const viewMore = document.querySelector('.view-more');
const viewMoreContainer = document.querySelector('.view-more--container');


viewMoreBtn.addEventListener('click', () => {
      viewMoreContainer.classList.toggle('expanded')
      if (viewMoreContainer.classList.contains('expanded')) {
            viewMoreBtn.textContent = 'View Less'
      } else {
            viewMoreBtn.textContent = "View More"
      }
})

