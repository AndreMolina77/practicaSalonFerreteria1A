import React from 'react';

const RegisterBrands = ({
  setNameBrand,
  nameBrand,
  setYearBrand,
  yearBrand,
  setSloganBrand,
  sloganBrand,
  setImageBrand, // This setter should now expect a File object or null
  imageBrand,    // This state should now hold a File object or null
  id,
  handleEdit,
  saveCategory
}) => {

  // A helper function to handle form submission
  const onSubmitForm = (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Determine which action to call based on `id`
    if (!id) {
      saveCategory(e); // Call saveCategory if no id (new entry)
    } else {
      handleEdit(e);   // Call handleEdit if id exists (editing existing entry)
    }
  };

  return (
    <div className="">
      <form
        className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmitForm} // Attach the onSubmit handler here
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nameBrand">Nombre de la categoría</label>
          <input
            type="text"
            id="nameBrand" // Good to have an ID matching htmlFor
            name="nameBrand"
            value={nameBrand}
            onChange={(e) => setNameBrand(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Marca"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="yearBrand">Año</label>
          <input
            type="date"
            id="yearBrand" // Good to have an ID matching htmlFor
            name="yearBrand"
            value={yearBrand}
            onChange={(e) => setYearBrand(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Año" // Placeholder for date input is visible in some browsers, but for date pickers usually not relevant
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="sloganBrand">Slogan</label>
          <input
            type="text"
            id="sloganBrand" // Good to have an ID matching htmlFor
            name="sloganBrand"
            value={sloganBrand}
            onChange={(e) => setSloganBrand(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Slogan"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="imageBrand">Imagen</label>
          <input
            type="file"
            id="imageBrand" // Good to have an ID matching htmlFor
            name="imageBrand"
            accept="image/*" // Crucial for filtering to image files
            onChange={(e) => setImageBrand(e.target.files)} // Correctly store the File object
            className="w-full px-3 py-2 border rounded"
            // Remove placeholder as it has no effect on type="file"
          />
          {imageBrand && imageBrand.name && (
            <p className="text-sm text-gray-500 mt-1">Archivo seleccionado: {imageBrand.name}</p>
          )}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {!id ? 'Guardar' : 'Editar'}
        </button>
      </form>
    </div>
  );
};

export default RegisterBrands;