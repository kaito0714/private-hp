const btn_ = document.getElementsByClassName("btns_");
const preBtn_ = document.querySelector(".prev-btn_");
const nextBtn_ = document.querySelector(".next-btn_");

for (let i = 0; i < btn_.length; i++){
    btn_[i].addEventListener('click', () => {
        const slide_ = document.querySelector('.slide_ ul').children;
        const Indicator_ = document.querySelector('.indicator_').children;

        const lastSlideIndex_ = slide_.length -1 ;
        const firstSlideIndex_ = 0;
        const lastIndicatorIndex_ = Indicator_.length -1;
        const firstIndicatorIndex_ = 0;

        const firstItem_ = slide_.item(firstSlideIndex_);
        const lastItem_ = slide_.item(lastSlideIndex_);
        const firstIndicator_ = Indicator_.item(firstIndicatorIndex_);
        const lastIndicator_ = Indicator_.item(lastIndicatorIndex_);


        if (btn_[i] == preBtn_) {
            setTimeout(() => {
                firstItem_.parentNode.insertBefore(lastItem_, firstItem_);
                firstIndicator_.parentNode.insertBefore(firstIndicator_, lastIndicator_.nextSibling);
            }, 400);
        } else if (btn_[i] === nextBtn_) {
            setTimeout(() => {
                lastItem_.parentNode.insertBefore(firstItem_, lastItem_.nextSibling);
                firstIndicator_.parentNode.insertBefore(lastIndicator_, firstIndicator_);
            }, 400)
        }
    })
}
