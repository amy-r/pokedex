import fetchPokeTypes from './helper.js'

describe('addPokeTypes', () => {
let mockData;

  it('calls fetch', () => {
    window.fetch = jest.fn();
    fetchPokeTypes();
    expect(window.fetch).toHaveBeenCalled();
  })

  it('returns an array of objects', () => {
    mockData = 
          { "id": "1",
            "name": "normal",
            "pokemon": [
              "16",
              "17",
              "18",
              "19",
              "20" ]
          }
  
  })
}) 

