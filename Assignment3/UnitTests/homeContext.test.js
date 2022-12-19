import { homeReducer } from "../../client/src/components/shop/home/HomeContext";

test('Homepage States Test', () => {
    
    var action = {
        type: 'categoryListDropdown',
        payload: true,
    };

    var homeState = {
        categoryListDropdown: false,
        filterListDropdown: false,
        searchDropdown: false,
        products: null,
        loading: false,
        sliderImages: [],
    };

    var state = homeReducer(homeState, action);
    
    expect(state.categoryListDropdown).toBe(true);
    expect(state.filterListDropdown).toBe(false);
    expect(state.searchDropdown).toBe(false);

    action.type = 'filterListDropdown';

    var state = homeReducer(homeState, action);
    
    expect(state.categoryListDropdown).toBe(false);
    expect(state.filterListDropdown).toBe(true);
    expect(state.searchDropdown).toBe(false);

    action.type = 'searchDropdown';

    var state = homeReducer(homeState, action);
    
    expect(state.categoryListDropdown).toBe(false);
    expect(state.filterListDropdown).toBe(false);
    expect(state.searchDropdown).toBe(true);

    action.type = 'setProducts';

    var state = homeReducer(homeState, action);
    
    expect(state.products).toBe(true);

    action.type = 'searchHandleInReducer';
    action.productArray = [];

    var state = homeReducer(homeState, action);
    
    expect(state.products).toEqual([]);

    action.type = 'loading';

    var state = homeReducer(homeState, action);
    
    expect(state.loading).toBe(true);

    action.type = 'sliderImages';

    var state = homeReducer(homeState, action);
    
    expect(state.sliderImages).toBe(true);
});
