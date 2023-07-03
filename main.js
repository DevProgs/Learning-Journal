const viewMoreBtn = document.querySelector('.blog__button');
const viewMore = document.querySelector('.view-more');
const viewMoreContainer = document.querySelector('.view-more--container');


viewMoreBtn.addEventListener('click', () => {
  viewMore.classList.toggle('hidden');
  if (viewMore.classList.contains('hidden')) {
    viewMoreBtn.textContent = 'View More'
  } else {
    viewMoreBtn.textContent = 'View Less'
  }
  viewMoreContainer.classList.add('view-more--animation');
});

