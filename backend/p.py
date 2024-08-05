import requests
from bs4 import BeautifulSoup

url = 'https://torob.com/browse/94/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-mobile/'

response = requests.get(url)
if response.status_code == 200:
    html = response.text
    soup = BeautifulSoup(html, 'html.parser')

    products = []

    for product_box in soup.find_all(class_='jsx-c3685eb9076392ea'):
        name_element = product_box.find(class_='product-name')
        price_element = product_box.find(class_='product-price-text')
        image_element = product_box.find('img')

        name = name_element.get_text(strip=True) if name_element else None
        price = price_element.get_text(strip=True) if price_element else None
        image_url = image_element['src'] if image_element and 'src' in image_element.attrs else None

        if name and price and image_url:
            products.append({
                'name': name,
                'price': price,
                'image_url': image_url
            })

    print(products)
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
