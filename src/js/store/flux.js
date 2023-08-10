const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [
		  {
			id: 1,
			name: "John Smith",
			homeAddress: "150 East 58th St., 30th Floor, New York, N.Y. 10155",
			phone: "+ 1 202 55-4080",
			email: "smith05@hotmail.es",
			image:
			  "https://st.depositphotos.com/1743476/1276/i/450/depositphotos_12767124-stock-photo-joyful-man-face.jpg",
		  },
		  {
			id: 2,
			name: "Harper Williams",
			homeAddress: "2655 Le Jeune Road, Suite 203, Miami, FL 33134",
			phone: "+ 1 305 446-5511 ",
			email: "wharper@gmail.com",
			image:
			  "https://img.freepik.com/foto-gratis/mujer-joven-hermosa-sueter-rosa-calido-aspecto-natural-sonriente-retrato-aislado-cabello-largo_285396-896.jpg?w=740&t=st=1691629149~exp=1691629749~hmac=edc902821e7eee9562e51b1f9a5c22873c179ae5449e54db9dcbc65e667b24aa",
		  },
		  {
			id: 3,
			name: "Andrew Jones",
			homeAddress: " 5055 Wilshire Blvd., Suite 960, Los Angeles, CA 90036",
			phone: "+ 1 213 938-015",
			email: "andrewjo05@outlook.com",
			image:
			  "https://st.depositphotos.com/1743476/2514/i/600/depositphotos_25144723-stock-photo-happy-adult-man-smiling.jpg",
		  },
		  {
			id: 4,
			name: "Elizabeth Brown",
			homeAddress: "2375 Pennsylvania Ave., N.W., Washington, D.C. 20037",
			phone: "+ 1 202 728-2330",
			email: "brownEli31@gmail.com",
			image:
			  "https://img.freepik.com/foto-gratis/retrato-mujer-caucasica-sonriendo_53876-24998.jpg?w=740&t=st=1691629726~exp=1691630326~hmac=d50f11aeba83d1ac79fd460ece5a0f4355dd877dfc637d9e169eaff76bc12c33",
		  },
		],
	  },
	  actions: {
		startEditing: (contactId) => {
		  const store = getStore();
		  const contacts = store.contacts.map((contact) => {
			if (contact.id === contactId) {
			  return { ...contact, isEditing: true };
			} else {
			  return contact;
			}
		  });
		  setStore({ contacts });
		},
  
		cancelEditing: (contactId) => {
		  const store = getStore();
		  const contacts = store.contacts.map((contact) => {
			if (contact.id === contactId) {
			  return { ...contact, isEditing: false };
			} else {
			  return contact;
			}
		  });
		  setStore({ contacts });
		},
  
		saveEditedContact: (editedContact) => {
		  const store = getStore();
		  const contacts = store.contacts.map((contact) => {
			if (contact.id === editedContact.id) {
			  return editedContact;
			} else {
			  return contact;
			}
		  });
		  setStore({ contacts });
		},
  
		saveNewContact: (newContact) => {
		  const store = getStore();
		  const newId = store.contacts.length + 1;
		  const contacts = [
			...store.contacts,
			{ ...newContact, id: newId, isEditing: false },
		  ];
		  setStore({ contacts });
		},
  
		deleteContact: (contactId) => {
		  const store = getStore();
		  const filteredContacts = store.contacts.filter(
			(contact) => contact.id !== contactId
		  );
		  setStore({ contacts: filteredContacts });
		},
	  },
	};
  };
  
  export default getState;