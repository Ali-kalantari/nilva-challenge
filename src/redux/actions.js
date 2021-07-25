export const add = "add";
export const update = "update";

export const Fetchdata = () => async (dispatch, getState) => {
  const req = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
  const data = await req.json();
  const newdata = data.map((item, index) => {
    data[index].click = 0;
  });
  dispatch({
    type: add,
    payload: data,
  });
};

export const increment = (id)=> (dispatch)=>{


  dispatch({
    type:update,
    payload:id

  })

}