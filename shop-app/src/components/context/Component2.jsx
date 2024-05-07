import Component3 from "./Component3"

const Component2 = () => {

    return (
        <div className="border border-3 border-warning rounded p-2">
            component 2 is child of component 1 

            <Component3/>
        </div>
    )

}

export default Component2