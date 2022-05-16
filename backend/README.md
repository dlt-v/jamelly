# Jamelly REST API - krótka dokumentacja

### Tomasz Michalski - ID06IO1 - 19012

Stan na dzień 17.05.2022
Uwaga: API jest cały czas rozwijane i jego stan może uledz zmianie.

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

**Snippety** to są pojedyńcze notatki, które znajdują się w zeszycie.
Na ten moment są one oddzielne z powodu braku walidacji i przypisania zeszytów poszczególnym użytkownikom.

| Ścieżka                   | Opis                       |
| ------------------------- | -------------------------- |
| ~/snippets                | lista dostępnych snippetów |
| ~/snippet/<int:pk>        | jeden snippet z podanym id |
| ~/snippet/<int:pk>/update | aktualizacja snippeta      |
| ~/snippet/<int:pk>/delete | usuwanie snippeta          |

**Todo** jest to zadanie z bazową treścią.
Następny plan jest łączenie zadań w "projekty".

| Ścieżka                | Opis                       |
| ---------------------- | -------------------------- |
| ~/todos                | lista dostępnych zadań     |
| ~/todo/<int:pk>        | jedno zadanie z podanym id |
| ~/todo/<int:pk>/update | aktualizacja zadania       |
| ~/todo/<int:pk>/delete | usuwanie zadania           |

**Grupa** jest to "kategoria" użytkowników.
na ten moment służy wyłącznie w celach poglądowych z powodów w.w.

| Ścieżka                 | Opis                     |
| ----------------------- | ------------------------ |
| ~/groups                | lista dostępnych grup    |
| ~/group/<int:pk>        | jedna grupa z podanym id |
| ~/group/<int:pk>/update | aktualizacja grupy       |
| ~/group/<int:pk>/delete | usuwanie grupy           |

**Zawartość bazy danych nie jest zapisywana.**
