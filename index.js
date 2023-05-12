const baseUrl = 'http://localhost:4000';

// get whole guest list, one open empty by default. pay attention to async syntax.

async function getGuests() {
  const response = await fetch(`${baseUrl}/guests`);
  const allGuests = await response.json();

  console.log(allGuests);
}

async function getSingleGuest() {
  const response = await fetch(`${baseUrl}/guests/:id`);
  const singleGuest = await response.json();
}

// creating a new guest

async function createGuest() {
  const response = await fetch(`${baseUrl}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
  });

  const createdGuest = await response.json();

  console.log(createdGuest);
}

// updating a guest

async function updateGuest() {
  const response = await fetch(`${baseUrl}/guests/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ attending: true }),
  });

  const updatedGuest = await response.json();

  console.log(updatedGuest);
}

// deleting a guest

async function deleteGuest() {
  const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
  const deletedGuest = await response.json();

  console.log(deletedGuest);
}

await createGuest().catch((error) => {
  console.log(error);
});

await getGuests().catch((error) => {
  // GET
  console.log(error);
});

// await updateGuest().catch((error) => {
//   console.log(error);
// });

// await getGuests().catch((error) => {
//   // GET
//   console.log(error);
// });

// await deleteGuest().catch((error) => {
//   console.log(error);
// });

// await getGuests().catch((error) => {
//   // GET
//   console.log(error);
// });
