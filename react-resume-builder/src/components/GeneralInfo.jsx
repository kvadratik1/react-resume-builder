import { useState, useEffect } from "react";

function GeneralInfo() {
  // -----------------------------
  // ИЗМЕНЕНО: useState теперь инициализируется сразу из localStorage
  // -----------------------------
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("general");
    return saved ? JSON.parse(saved).name : "";
  });

  const [email, setEmail] = useState(() => {
    const saved = localStorage.getItem("general");
    return saved ? JSON.parse(saved).email : "";
  });

  const [tel, setTel] = useState(() => {
    const saved = localStorage.getItem("general");
    return saved ? JSON.parse(saved).tel : "";
  });

  const [isEditing, setIsEditing] = useState(() => {
    const saved = localStorage.getItem("general");
    return saved ? false : true; // если есть данные — сразу не редактируем
  });

  // -----------------------------
  // ИЗМЕНЕНО: useEffect сохраняет изменения в localStorage
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("general", JSON.stringify({ name, email, tel }));
  }, [name, email, tel]);

  const handleSubmit = () => {
    console.log(name, email, tel);
  };

  // -----------------------------
  // Добавлено: рендер для просмотра данных
  // -----------------------------
  if (!isEditing) {
    return (
      <div>
        <h2>Personal Information</h2>

        <p>{name}</p>
        <p>{email}</p>
        <p>{tel}</p>

        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  // -----------------------------
  // Добавлено: форма редактирования
  // -----------------------------
  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="Phone number"
      />

      <button
        onClick={() => {
          handleSubmit();
          setIsEditing(false);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default GeneralInfo;
