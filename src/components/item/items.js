import React from 'react';

const Items = (props) => {
    const {items, del , count ,discount} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                    <button onClick={() => count(item.id)} >count +</button>
                    <button onClick={() => discount(item.id)}>count -</button>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items