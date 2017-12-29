import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { PureSearchPage } from "../../components/PureSearchPage/index";
import { Text } from "react-native";

const Query = gql`
  query CardList {
    result(searchInput: "air")
      @rest(type: "Card", path: "card?name=:searchInput") {
      cards {
        name
      }
    }
  }
`;

class SearchPage extends React.Component {
  render() {
    const { searchListProps, searchBoxProps } = this.props;

    return (
      <PureSearchPage
        searchBoxProps={searchBoxProps}
        searchListProps={searchListProps}
      />
    );
  }
}

const ConnectedSearchPage = graphql(Query, {
  options: ({ searchTerm }) => {
    return { variables: { searchInput: searchTerm } };
  },

  props(opts) {
    const { data: { loading, error, cards } } = opts;

    console.log(opts);
    if (loading || error) {
      console.log(error);
      return {
        searchListProps: {
          items: []
        },
        searchBoxProps: {
          searchTerm: opts.ownProps.searchTerm,
          setSearch: opts.ownProps.setSearch
        }
      };
    }

    return {
      searchListProps: {
        items: cards.map(card => ({
          item: {
            text: card.name
          }
        }))
      },

      searchBoxProps: {
        searchTerm: opts.ownProps.searchTerm,
        setSearch: opts.ownProps.setSearch
      }
    };
  }
})(SearchPage);

export default class StateManagedSearchPage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  setSearch = searchTerm => {
    this.setState({
      searchTerm
    });
  };

  render() {
    return (
      <ConnectedSearchPage
        searchTerm={this.state.searchTerm}
        setSearch={this.setSearch}
      />
    );
  }
}
