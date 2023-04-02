export default function CreatePizza() {

    return (
        <div className="form-container-create">
            <form className="pizza-form">
                <h2 className="form-heading">Create New Pizza</h2>
                <div className="form-input">
                    <label for="pizza-name" className="form-label">Pizza Name</label>
                    <input type="text" id="pizza-name" name="pizza-name" className="form-text-input" required />
                </div>
                <div className="form-input">
                    <label for="pizza-description" className="form-label">Pizza Description</label>
                    <textarea id="pizza-description" name="pizza-description" rows="4" className="form-textarea" required></textarea>
                </div>
                <div className="form-input">
                    <label for="pizza-image" className="form-label">Pizza Image</label>
                    <input type="text" id="pizza-image" name="pizza-image" className="form-text-input" placeholder="Enter image URL" required />
                </div>
                <div className="form-submit-button-container">
                    <input type="submit" value="Create Pizza" className="form-submit-button" />
                </div>
            </form>
        </div>
    )
}