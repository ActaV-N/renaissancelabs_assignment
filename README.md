# Renaissancelabs Assignment

A frontend assignment of renaissancelabs.

## Getting Started

### Installing

`yarn install`

### Start

`yarn dev`

## Description

web3-react, react-jazzicon을 이용하여 지갑 연동을 구현하였습니다.
style 라이브러리는 tailwindcss를 이용했습니다.

### Components

#### Cards

> NFT 컬렉션을 위한 컴포넌트들이 들어있습니다.

SingleCard와 CollectionCard로 나뉘며, 각각 알맞는 탭에서 확인할 수 있습니다.
'All'탭에서는 CollectionCard와 Collection에 포함되지 않는 SingleCard를 보여줍니다.

#### Container

> 다양한 용도의 컨테이너들이 들어있습니다.

카드 리스트들을 그리드형식으로 볼 수 있는 컨테이너, 그림자가 있는 컨테이너가 들어있습니다.

#### Icon

> 이더리움 토큰 아이콘이 들어있습니다.

#### Inputs

> 버튼 컴포넌트가 들어있습니다.

#### Layout

> Layout과 관련된 컴포넌트들이 들어있습니다.

일관된 Layout을 위한 양옆 패딩 조정용 WidthSetter 컴포넌트와 헤더 아래쪽에 배치될 컨텐츠들을 위한 Content 컴포넌트가 들어있습니다.

##### Header

> 지갑 연결과 로고, 탭을 위한 컴포넌트들이 들어있습니다.

탭 컴포넌트는 각 페이지에서 재사용될 수 있으며, TabItem 컴포넌트와 함께 쓰입니다.

#### Profile

> Header에 들어가는 프로필관련 컴포넌트가 들어있습니다.

web3-react 라이브러리에 맞춰 작성되었고, Metamask 이외의 지갑과도 연결할 수 있도록 작성되었습니다.

#### Typography

> 기본적인 텍스트 컴포넌트입니다.

디자인 파일에서 사용된 폰트와 색상들, 굵기를 인터페이스로 가지고 있어 일관된 텍스트 디자인을 유지하도록 합니다.

#### Utils

> Modal같은 컴포넌트 즉, 페이지에서 유틸리티적인 부분을 담당하는 컴포넌트들이 들어있습니다.

FadeActionTooltip 컴포넌트가 들어있습니다. 프로필에서 지갑 연결을 위한 툴팁입니다.

---

### Data

NFT 컬렉션과 아트워크와 관련된 데이터 인터페이스와 그 예시 데이터들이 작성되어있습니다.

---

### Lib

Metamask connector가 작성되어있고, 범용적으로 사용하는 util함수들도 같이 들어있습니다.
