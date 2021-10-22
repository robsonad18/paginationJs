const data = Array.from({ length: 100 });

const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)
}

const controls = {
    next() {
        state.page++;

        const lastPage = state.page > state.totalPage;

        if (lastPage) {
            state.page--;
        }
    },
    prev() {
        state.page--;
        if (state.page < 1) {
            state.page++;
        }
    },
    goTo(page) {
        state.page = page;
    }
}