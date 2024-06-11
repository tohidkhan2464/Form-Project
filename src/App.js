import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing th form Data");
    console.log(formData);

    let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
        // join() returns an array as a string
        data = data.join(" \n");
        alert(data);
  }


  return (
    <div >
      <form action=""
      className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md" onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName" className=" font-medium text-sm " >First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Tohid"
            value={formData.firstName}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        <div>
          <label htmlFor="lastName" className=" font-medium text-sm " >Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Khan"
            value={formData.lastName}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        <div>
          <label htmlFor="email" className=" font-medium text-sm " >Email Address</label>
          <input type="email"
            name="email"
            id="email"
            placeholder="tohidkhan@gmail.com"
            value={formData.email}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        <div>
          <label className=" font-medium text-sm " htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2">

            <option value="india">India</option>
            <option value="unitedStates">United States</option>
            <option value="Russia">Russia</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div>
          <label className=" font-medium text-sm " htmlFor="streetAddress" >Street Address</label>
          <input
            type="text"
            name="streetAddress"
            id="streetAddress"
            placeholder="RJ 176"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        <div>
          <label className=" font-medium text-sm " htmlFor="city" >City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Rajsamand"
            value={formData.city}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        <div>
          <label className=" font-medium text-sm " htmlFor="state" >State/Provinces</label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="Rajasthan"
            value={formData.state}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        <div>
          <label className=" font-medium text-sm " htmlFor="postalCode" >ZIP/Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="313324"
            value={formData.postalCode}
            onChange={changeHandler}
            className="border border-blue-400 w-full rounded-md p-2 mt-2" />
        </div>

        {/* <fieldset className="mb-4"> */}
        <div className='mb-4'>
          <label className='font-medium text-sm'>By Email</label>
          <div className='flex items-start gap-4 mt-2'>
            <div>
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
                className='w-4 h-4 mt-[6px]' />
            </div>

            <div className="mt-[-6px]">
              <label className='font-medium text-sm' htmlFor="comments">Comments</label>
              <p className='text-sm text-gray-500'>Get notified when someone posts a comment on posting.</p>
            </div>
          </div>

          <div className='flex items-start gap-4 mt-2'>
            <div>
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                className='w-4 h-4 mt-[6px]'
                checked={formData.candidates}
                onChange={changeHandler} />
            </div>

            <div className="mt-[-6px]">
              <label className='font-medium text-sm' htmlFor="candidates">Candidates</label>
              <p className='text-sm text-gray-500'>Get notified when candidates applies for jobs.</p>
            </div>
          </div>


          <div className='flex items-start gap-4 mt-2'>
            <div>
              <input
                id="offers"
                name="offers"
                type="checkbox"
                className='w-4 h-4 mt-[6px]'
                checked={formData.offers}
                onChange={changeHandler} />
            </div>

            <div className="mt-[-6px]">
              <label className='font-medium text-sm' htmlFor="offers">Offers</label>
              <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects a offer.</p>
            </div>
          </div>
          {/* </fieldset> */}
        </div >

        <div className='mb-4'>
          {/* <fieldset className="mt-2"> */}
          <label className='font-medium text-sm'>Push Notifications</label>
          <p className='text-sm text-gray-500'>These are delivered via SMS on mobile phone.</p>

          <div className='flex gap-4 items-center mt-2'>
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="everything"
              className='w-4 h-4'
              onChange={changeHandler} />
            <label className='font-medium text-sm' htmlFor="pushEverything">Everything</label>
          </div>

          <div className='flex gap-4 items-center mt-2'>
            <input
              type="radio"
              id="pushemail"
              name="pushNotifications"
              value="Same as Email"
              className='w-4 h-4'
              onChange={changeHandler} />
            <label className='font-medium text-sm' htmlFor="pushemail">Same as Email</label>
          </div>

          <div className='flex gap-4 items-center mt-2'>
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="Nothing"
              className='w-4 h-4'
              onChange={changeHandler} />
            <label className='font-medium text-sm' htmlFor="pushNothing">Nothing</label>
          </div>
          {/* </fieldset> */}
        </div>

        <button className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
        transition-all duration-200'>Save</button>
      </form>
    </div>
  );
}

export default App;
