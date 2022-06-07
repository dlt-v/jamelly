# Jamelly REST API - krótka dokumentacja

### Tomasz Michalski - ID06IO1 - 19012

Stan na dzień 17.05.2022
Uwaga: API jest cały czas rozwijane i jego stan może ulec zmianie.

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

**Snippety** to są pojedyńcze notatki, które znajdują się w zeszycie.
Na ten moment są one oddzielne z powodu braku walidacji i przypisania zeszytów poszczególnym użytkownikom.

| Ścieżka                    | Opis                           |
| -------------------------- | ------------------------------ |
| ~/snippets                 | lista dostępnych snippetów     |
| ~/snippets/<int:pk>        | GET jeden snippet z podanym id |
| ~/snippets/<int:pk>        | PUT utworzenie snippeta        |
| ~/snippets/<int:pk>/update | aktualizacja snippeta          |
| ~/snippets/<int:pk>/delete | usuwanie snippeta              |

**Todo** jest to zadanie z bazową treścią.
Następny plan jest łączenie zadań w "projekty".

| Ścieżka                 | Opis                           |
| ----------------------- | ------------------------------ |
| ~/todos                 | lista dostępnych zadań         |
| ~/todos/<int:pk>        | GET jedno zadanie z podanym id |
| ~/todos/<int:pk>        | PUT tworzenie zadania          |
| ~/todos/<int:pk>/update | aktualizacja zadania           |
| ~/todos/<int:pk>/delete | usuwanie zadania               |

**Grupa** jest to "kategoria" użytkowników.
na ten moment służy wyłącznie w celach poglądowych z powodów w.w.

| Ścieżka                  | Opis                     |
| ------------------------ | ------------------------ |
| ~/groups                 | lista dostępnych grup    |
| ~/groups/<int:pk>        | jedna grupa z podanym id |
| ~/groups/<int:pk>/update | aktualizacja grupy       |
| ~/groups/<int:pk>/delete | usuwanie grupy           |

**Zawartość bazy danych nie jest zapisywana.**