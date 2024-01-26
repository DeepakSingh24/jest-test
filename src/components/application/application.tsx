export const Application = () => {
  return (
    <form>
      <h1>Job Application form</h1>
      <h2>Job Application form</h2>
      <p>All fields are mandatory</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Fullname"
          value={'Deepak'}
          onChange={() => {}}
        />
      </div>
      <img src="" alt="A person with laptop" />
      <label htmlFor="bio">Bio</label>
      <textarea name="bio" id="bio" />
      <span title="close">close</span>
      <div data-testid="custom-element">custom HTML Element</div>

      <div>
        <label htmlFor="job-location">Name</label>
        <select id="job-location">
          <option value="">Select a Location</option>
          <option value="US">United States</option>
          <option value="UK">United kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" />I Agree to terms and condition
        </label>
      </div>

      <button disabled>Submit</button>
    </form>
  )
}
