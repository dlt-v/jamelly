# Jamelly REST API - krótka dokumentacja

### Tomasz Michalski - ID06IO1 - 19012

Stan na dzień 10.06.2022

## Instalacja

By uruchomić serwer należy się upewnić, że repozytorium zostało ściągnięte w pełnej wersji.
Serwer używa kilku modułów, które należy zainstalować, ich lista jest umieszczona w `requirements.txt`.
Zalecane jest użycie wirtualnego środowiska, o module `venv` więcej [tutaj](https://docs.python.org/3/library/venv.html):

```sh
cd backend
python3 -m venv env
env\Scripts\activate
```

By upewnić się, że używasz wirtualnego środowiska użyj komendy: `which pip`. Powinna wyświetlić ścieżkę do lokalnego interpretera.

```sh
pip install -r requirements.txt
```

## Użytkowanie

### Start

Po instalacji uruchomienie serwera jest dokonywane za pomocą jednej komendy. Upewnij się, że jesteś w wirtualnym środowisku.

```sh
python3 manage.py runserver
```

Serwer powinien działać domyślnie na porcie `8000`.
W konsoli powinienieś widzieć wszelkie operacje jakie dotyczą serwera.

**CORS nie jest ustawiony pod inne adresy niż localhost**, więc aplikacje hostowane nie mają na ten moment dostępu.

### Endpointy

Serwer udostępnia interfejs [REST](https://restfulapi.net/) do manipulowania danymi.
`~` - dynamiczny root URL serwera. Podczas pracy najpewniej `http://localhost:8000`.

![Wstępny koncept architektury modelu bazy danych.](https://cdn.discordapp.com/attachments/951023586079039518/969570609677865000/unknown.png 'Wstępny koncept architektury modelu bazy danych.').

**Notebooki** są to organizery notatek dla pojedynczego użytkownika. Mogą być one kategoryzowane wszelako.
Notebook jest przypisany pojedynczemu użytkownikowi oraz nie posiada limitu note-snippetów.

UWAGA: Notebooki są chwilowo wyłączone na potrzeby bazowej implementacji.

| Ścieżka              | Opis             |
| -------------------- | ---------------- |
| ~/notebooks/         | GET, POST        |
| ~/notebooks/<int:pk> | GET, PUT, DELETE |

Pola modelu `notebook`:
| Pole | Opis |
| -------------------------- | ------------------------------ |
| id | auto |
| created_at | auto |
| name | txt(50), required |
| owner_id | auto |

**Note-Snippety** są pojedynczymi fragmentami notatek w postaci tekstu.
Limit znaków jest ustawiony na 1000 ale może uledz zmianie.

| Ścieżka                 | Opis               |
| ----------------------- | ------------------ |
| ~/notesnippets/         | GET, POST          |
| ~/notesnippets/<int:pk> | GET, PATCH, DELETE |

Pola modelu `note-snippet`:

| Pole     | Opis                |
| -------- | ------------------- |
| id       | auto                |
| content  | txt(1000), required |
| owner_id | auto                |

**Todo** są zadaniami do zrobienia wyznaczanymi przez użytkownika.
Klient może aktualizować todo podczas pracy.

| Ścieżka          | Opis             |
| ---------------- | ---------------- |
| ~/todos/         | GET, POST        |
| ~/todos/<int:pk> | GET, PUT, DELETE |

Pola modelu `todo`:
| Pole | Opis |
| -------------------------- | ------------------------------ |
| id | auto |
| created_at | auto |
| name | txt(80), required |
| content | txt(80), required |
| status | txt(enum, (ACT, CAN, FIN), required |
| owner_id | auto |

**Users** jest modelem reprezentującym użytkownika.

| Ścieżka     | Opis |
| ----------- | ---- |
| ~/users/    | GET  |
| ~/register/ | POST |
| ~/auth/     | POST |

Pola modelu `User` zawarte w [dokumentacji](https://docs.djangoproject.com/en/4.0/ref/contrib/auth/#user-model).

**Tworzenie użytkownika** wymaga pól username, email, password i password2 (hasła są porównywane na serwerze).
**Pozyskiwanie tokenu** wymaga pól username oraz password.
Do operacji edycji oraz tworzenia należy przypisać do zapytania header `"Authorization"` z wartością `"Token x"`, gdzie x jest tokenem pozyskiwanym linię wyżej.

Dla przykładu operacji interfejsu REST można zajrzeć na workspace Postman'a [tutaj](https://www.postman.com/dlt-v/workspace/f8c000a2-0b95-47cd-8075-85943a2b8a40/overview).

**Zawartość bazy danych nie jest zapisywana.**
